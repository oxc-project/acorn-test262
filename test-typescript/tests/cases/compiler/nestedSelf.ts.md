__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 27,
                "end": 111,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 32,
                    "end": 46,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 40,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 43,
                      "end": 45,
                      "value": 42,
                      "raw": "42"
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 50,
                    "end": 108,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 60,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 60,
                      "end": 108,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                  "name": "map",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 77,
                                  "end": 106,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 78,
                                      "end": 79,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
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
                                              "name": "n",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          },
                                          "operator": "*",
                                          "right": {
                                            "type": "Identifier",
                                            "start": 102,
                                            "end": 103,
                                            "name": "x",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
