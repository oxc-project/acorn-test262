__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 250,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 13,
        "name": "i1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 40,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 15,
            "end": 38,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 23,
                "end": 37,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 25,
                    "end": 35,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 26,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 26,
                      "end": 34,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 28,
                        "end": 34
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 41,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "name": "i2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 80,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 55,
            "end": 78,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 63,
                "end": 77,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 65,
                    "end": 75,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 68,
                        "end": 74
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 82,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 94,
        "name": "i3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 103,
          "end": 105,
          "expression": {
            "type": "Identifier",
            "start": 103,
            "end": 105,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 107,
          "end": 109,
          "expression": {
            "type": "Identifier",
            "start": 107,
            "end": 109,
            "name": "i2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 110,
        "end": 113,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 114,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 126,
        "name": "i4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 135,
          "end": 137,
          "expression": {
            "type": "Identifier",
            "start": 135,
            "end": 137,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 139,
          "end": 141,
          "expression": {
            "type": "Identifier",
            "start": 139,
            "end": 141,
            "name": "i2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 142,
        "end": 180,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 144,
            "end": 178,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 150,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 152,
                "end": 177,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 154,
                    "end": 164,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 155,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 155,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 157,
                        "end": 163
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 165,
                    "end": 175,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 166,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 168,
                        "end": 174
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 182,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 190,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 249,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 211,
            "end": 247,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 222,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 222,
              "end": 247,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 233,
                "end": 247,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 235,
                    "end": 245,
                    "argument": {
                      "type": "Literal",
                      "start": 242,
                      "end": 244,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 224,
                "end": 232,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 226,
                  "end": 232
                }
              }
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 202,
          "end": 204,
          "expression": {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "name": "i4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
