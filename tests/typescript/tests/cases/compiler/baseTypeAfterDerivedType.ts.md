__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 251,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 31,
        "end": 68,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 37,
            "end": 66,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 43,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 44,
                "end": 58,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 51,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "value": null
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 70,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 84,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 85,
        "end": 122,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 91,
            "end": 120,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 98,
                "end": 112,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "value": null
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 124,
      "end": 196,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 138,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 194,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 168,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 168,
              "end": 194,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 169,
                  "end": 183,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 176,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  },
                  "value": null
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
              },
              "body": {
                "type": "BlockStatement",
                "start": 191,
                "end": 194,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 198,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 213,
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 214,
        "end": 251,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 220,
            "end": 249,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 226,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 227,
                "end": 241,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 234,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                },
                "value": null
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
