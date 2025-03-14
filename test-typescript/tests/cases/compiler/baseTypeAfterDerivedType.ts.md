__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 68,
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 68,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 37,
            "end": 66,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 43,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 44,
                "end": 58,
                "argument": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 51,
                  "decorators": [],
                  "name": "args",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 58,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 53,
                    "end": 58,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 53,
                      "end": 56
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 65,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 61,
                "end": 65
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 26,
          "end": 30,
          "expression": {
            "type": "Identifier",
            "start": 26,
            "end": 30,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 70,
      "end": 122,
      "body": {
        "type": "TSInterfaceBody",
        "start": 85,
        "end": 122,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 91,
            "end": 120,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 98,
                "end": 112,
                "argument": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "args",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 105,
                  "end": 112,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 107,
                    "end": 112,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 107,
                      "end": 110
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 119,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 115,
                "end": 119
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 84,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 124,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 194,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 168,
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
              "start": 168,
              "end": 194,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 194,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 169,
                  "end": 183,
                  "argument": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 176,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 183,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 178,
                      "end": 183,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 178,
                        "end": 181
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 184,
                "end": 190,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 186,
                  "end": 190
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 138,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 150,
          "end": 155,
          "expression": {
            "type": "Identifier",
            "start": 150,
            "end": 155,
            "decorators": [],
            "name": "Base2",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 198,
      "end": 251,
      "body": {
        "type": "TSInterfaceBody",
        "start": 214,
        "end": 251,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 220,
            "end": 249,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 226,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 227,
                "end": 241,
                "argument": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 234,
                  "decorators": [],
                  "name": "args",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 234,
                  "end": 241,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 236,
                    "end": 241,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 236,
                      "end": 239
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 248,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 244,
                "end": 248
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 213,
        "decorators": [],
        "name": "Base2",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
