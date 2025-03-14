derivedTypeCallingBaseImplWithOptionalParams.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 57,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 57,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 28,
            "end": 55,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 36,
              "decorators": [],
              "name": "myMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 37,
                "end": 53,
                "argument": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 46,
                  "decorators": [],
                  "name": "myList",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 48,
                    "end": 53,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 48,
                      "end": 51
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "decorators": [],
        "name": "MyInterface",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 141,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 109,
              "decorators": [],
              "name": "myMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 125,
                "end": 141,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 123,
                  "decorators": [],
                  "name": "myList",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 118,
                      "end": 123,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 118,
                        "end": 121
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 71,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 83,
          "end": 94,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 94,
            "decorators": [],
            "name": "MyInterface",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 163,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 152,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 163,
                  "decorators": [],
                  "name": "MyInterface",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 166,
            "end": 179,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 170,
              "end": 177,
              "decorators": [],
              "name": "MyClass",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 194,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 193,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 181,
          "end": 191,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 191,
            "decorators": [],
            "name": "myMethod",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 278,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 278,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 278,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 278,
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 281,
            "end": 294,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 285,
              "end": 292,
              "decorators": [],
              "name": "MyClass",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 309,
      "expression": {
        "type": "CallExpression",
        "start": 296,
        "end": 308,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 296,
          "end": 306,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 306,
            "decorators": [],
            "name": "myMethod",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
