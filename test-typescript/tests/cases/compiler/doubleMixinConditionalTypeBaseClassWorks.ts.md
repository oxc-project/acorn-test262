doubleMixinConditionalTypeBaseClassWorks.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 356,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "decorators": [],
        "name": "Constructor",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 19,
        "end": 45,
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "start": 24,
            "end": 38,
            "argument": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "args",
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 38,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 33,
                "end": 38,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 33,
                  "end": 36
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 40,
          "end": 45,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 43,
            "end": 45,
            "members": []
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "decorators": [],
            "name": "Mixin1",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 63,
            "end": 146,
            "async": false,
            "body": {
              "type": "ClassExpression",
              "start": 99,
              "end": 146,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 118,
                "end": 146,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 120,
                    "end": 144,
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 139,
                      "decorators": [],
                      "name": "_fooPrivate",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 143,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 141,
                        "end": 143,
                        "members": []
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 113,
                "end": 117,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 94,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 94,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 93,
                    "end": 94,
                    "typeName": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 63,
              "end": 86,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 64,
                  "end": 85,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 74,
                    "end": 85,
                    "typeName": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 85,
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 148,
      "end": 236,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 167,
        "decorators": [],
        "name": "FooConstructor",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 170,
        "end": 235,
        "checkType": {
          "type": "TSTypeQuery",
          "start": 170,
          "end": 183,
          "exprName": {
            "type": "Identifier",
            "start": 177,
            "end": 183,
            "decorators": [],
            "name": "Mixin1",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 192,
          "end": 221,
          "params": [
            {
              "type": "Identifier",
              "start": 193,
              "end": 207,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 194,
                "end": 207,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 196,
                  "end": 207,
                  "typeName": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 207,
                    "decorators": [],
                    "name": "Constructor",
                    "optional": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 209,
            "end": 221,
            "typeAnnotation": {
              "type": "TSInferType",
              "start": 212,
              "end": 221,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 218,
                "end": 221,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 221,
                  "decorators": [],
                  "name": "Cls",
                  "optional": false
                },
                "out": false
              }
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 230,
          "end": 235
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 224,
          "end": 227,
          "typeName": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "decorators": [],
            "name": "Cls",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 312,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 249,
            "decorators": [],
            "name": "Mixin2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 252,
            "end": 312,
            "async": false,
            "body": {
              "type": "ClassExpression",
              "start": 291,
              "end": 312,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 310,
                "end": 312,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 305,
                "end": 309,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 279,
                "end": 286,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 283,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 285,
                    "end": 286,
                    "typeName": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 252,
              "end": 278,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 253,
                  "end": 277,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 263,
                    "end": 277,
                    "typeName": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 277,
                      "decorators": [],
                      "name": "FooConstructor",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 356,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 354,
        "end": 356,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 322,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 331,
        "end": 353,
        "arguments": [
          {
            "type": "CallExpression",
            "start": 338,
            "end": 352,
            "arguments": [
              {
                "type": "Identifier",
                "start": 345,
                "end": 351,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 338,
              "end": 344,
              "decorators": [],
              "name": "Mixin1",
              "optional": false
            },
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 331,
          "end": 337,
          "decorators": [],
          "name": "Mixin2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
