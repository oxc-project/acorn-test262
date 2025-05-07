__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 33,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 26,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 31,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 31,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 159,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 159,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 65,
              "end": 66,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 83,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 157,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 157,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 104,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 96,
                      "end": 103,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 96,
                        "end": 101
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 113,
                    "end": 151,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 119,
                        "end": 150,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 122,
                          "decorators": [],
                          "name": "d17",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 125,
                          "end": 150,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 127,
                              "end": 148,
                              "computed": true,
                              "key": {
                                "type": "MemberExpression",
                                "start": 128,
                                "end": 142,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 128,
                                  "end": 134,
                                  "decorators": [],
                                  "name": "Symbol",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 135,
                                  "end": 142,
                                  "decorators": [],
                                  "name": "dispose",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 143,
                                "end": 148,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 146,
                                  "end": 148,
                                  "body": []
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "returnType": null,
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 43,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
