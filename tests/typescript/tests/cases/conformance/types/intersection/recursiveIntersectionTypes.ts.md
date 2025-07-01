__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LinkedList",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeArguments": null,
            "start": 21,
            "end": 22
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 31
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LinkedList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 33,
                      "end": 43
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 44,
                            "end": 45
                          },
                          "typeArguments": null,
                          "start": 44,
                          "end": 45
                        }
                      ],
                      "start": 43,
                      "end": 46
                    },
                    "start": 33,
                    "end": 46
                  },
                  "start": 31,
                  "end": 46
                },
                "accessibility": null,
                "static": false,
                "start": 27,
                "end": 46
              }
            ],
            "start": 25,
            "end": 48
          }
        ],
        "start": 21,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 67
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 78
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              },
              "start": 78,
              "end": 86
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 87
          }
        ],
        "start": 68,
        "end": 89
      },
      "declare": false,
      "start": 51,
      "end": 89
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Product",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 108
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 123
          },
          "typeArguments": null,
          "start": 117,
          "end": 123
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "price",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 135
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 137,
                "end": 143
              },
              "start": 135,
              "end": 143
            },
            "accessibility": null,
            "static": false,
            "start": 130,
            "end": 144
          }
        ],
        "start": 124,
        "end": 146
      },
      "declare": false,
      "start": 91,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "entityList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkedList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 174
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Entity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 175,
                        "end": 181
                      },
                      "typeArguments": null,
                      "start": 175,
                      "end": 181
                    }
                  ],
                  "start": 174,
                  "end": 182
                },
                "start": 164,
                "end": 182
              },
              "start": 162,
              "end": 182
            },
            "start": 152,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 182
        }
      ],
      "declare": false,
      "start": 148,
      "end": 183
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "entityList",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 202
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 207
            },
            "optional": false,
            "computed": false,
            "start": 192,
            "end": 207
          },
          "definite": false,
          "start": 188,
          "end": 207
        }
      ],
      "declare": false,
      "start": 184,
      "end": 208
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 214
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "entityList",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 232
              },
              "optional": false,
              "computed": false,
              "start": 217,
              "end": 232
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 237
            },
            "optional": false,
            "computed": false,
            "start": 217,
            "end": 237
          },
          "definite": false,
          "start": 213,
          "end": 237
        }
      ],
      "declare": false,
      "start": 209,
      "end": 238
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 244
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entityList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 257
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 262
                },
                "optional": false,
                "computed": false,
                "start": 247,
                "end": 262
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 267
              },
              "optional": false,
              "computed": false,
              "start": 247,
              "end": 267
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 272
            },
            "optional": false,
            "computed": false,
            "start": 247,
            "end": 272
          },
          "definite": false,
          "start": 243,
          "end": 272
        }
      ],
      "declare": false,
      "start": 239,
      "end": 273
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 279
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "entityList",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 292
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 297
                  },
                  "optional": false,
                  "computed": false,
                  "start": 282,
                  "end": 297
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 302
                },
                "optional": false,
                "computed": false,
                "start": 282,
                "end": 302
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 307
              },
              "optional": false,
              "computed": false,
              "start": 282,
              "end": 307
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 312
            },
            "optional": false,
            "computed": false,
            "start": 282,
            "end": 312
          },
          "definite": false,
          "start": 278,
          "end": 312
        }
      ],
      "declare": false,
      "start": 274,
      "end": 313
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "productList",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LinkedList",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 342
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Product",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 343,
                        "end": 350
                      },
                      "typeArguments": null,
                      "start": 343,
                      "end": 350
                    }
                  ],
                  "start": 342,
                  "end": 351
                },
                "start": 332,
                "end": 351
              },
              "start": 330,
              "end": 351
            },
            "start": 319,
            "end": 351
          },
          "init": null,
          "definite": false,
          "start": 319,
          "end": 351
        }
      ],
      "declare": false,
      "start": 315,
      "end": 352
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "entityList",
          "optional": false,
          "typeAnnotation": null,
          "start": 353,
          "end": 363
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "productList",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 377
        },
        "start": 353,
        "end": 377
      },
      "directive": null,
      "start": 353,
      "end": 378
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "productList",
          "optional": false,
          "typeAnnotation": null,
          "start": 379,
          "end": 390
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "entityList",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 403
        },
        "start": 379,
        "end": 403
      },
      "directive": null,
      "start": 379,
      "end": 404
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 414
}
```
