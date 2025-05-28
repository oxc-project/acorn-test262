__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 113,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 111,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 19,
              "end": 111,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 27,
                "end": 111,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 32,
                    "end": 46,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 40,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 43,
                      "end": 45,
                      "value": 42,
                      "raw": "42"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 50,
                    "end": 108,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 60,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 60,
                      "end": 108,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 63,
                        "end": 108,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 65,
                            "end": 107,
                            "expression": {
                              "type": "CallExpression",
                              "start": 65,
                              "end": 107,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 65,
                                "end": 76,
                                "object": {
                                  "type": "ArrayExpression",
                                  "start": 65,
                                  "end": 72,
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "start": 66,
                                      "end": 67,
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 68,
                                      "end": 69,
                                      "value": 2,
                                      "raw": "2"
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 70,
                                      "end": 71,
                                      "value": 3,
                                      "raw": "3"
                                    }
                                  ]
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 73,
                                  "end": 76,
                                  "decorators": [],
                                  "name": "map",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 77,
                                  "end": 106,
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 78,
                                      "end": 79,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 84,
                                    "end": 106,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 86,
                                        "end": 104,
                                        "argument": {
                                          "type": "BinaryExpression",
                                          "start": 93,
                                          "end": 103,
                                          "left": {
                                            "type": "MemberExpression",
                                            "start": 93,
                                            "end": 99,
                                            "object": {
                                              "type": "ThisExpression",
                                              "start": 93,
                                              "end": 97
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 98,
                                              "end": 99,
                                              "decorators": [],
                                              "name": "n",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "operator": "*",
                                          "right": {
                                            "type": "Identifier",
                                            "start": 102,
                                            "end": 103,
                                            "decorators": [],
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
