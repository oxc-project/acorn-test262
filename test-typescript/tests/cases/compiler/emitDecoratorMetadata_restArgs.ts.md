__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 340,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 46,
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 46,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 46,
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 96,
            "decorators": [],
            "name": "MyMethodDecorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 96,
                  "decorators": [],
                  "name": "MethodDecorator",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 202,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 202,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 154,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 142,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 154,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 152,
                "end": 154,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 143,
                  "end": 150,
                  "argument": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 150,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 200,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 159,
                "end": 177,
                "expression": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 177,
                  "decorators": [],
                  "name": "MyMethodDecorator",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 200,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 198,
                "end": 200,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 189,
                  "end": 196,
                  "argument": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 196,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 99,
          "end": 116,
          "expression": {
            "type": "Identifier",
            "start": 100,
            "end": 116,
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 204,
      "end": 339,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 230,
        "end": 339,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 236,
            "end": 269,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 247,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 269,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 267,
                "end": 269,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 248,
                  "end": 265,
                  "argument": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 255,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 257,
                      "end": 265,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 257,
                        "end": 263
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 274,
            "end": 337,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 274,
                "end": 292,
                "expression": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 292,
                  "decorators": [],
                  "name": "MyMethodDecorator",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 303,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 303,
              "end": 337,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 335,
                "end": 337,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 304,
                  "end": 314,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 308,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 310,
                      "end": 314
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 316,
                  "end": 333,
                  "argument": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 323,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 323,
                    "end": 333,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 325,
                      "end": 333,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 325,
                        "end": 331
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 204,
          "end": 221,
          "expression": {
            "type": "Identifier",
            "start": 205,
            "end": 221,
            "decorators": [],
            "name": "MyClassDecorator",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
