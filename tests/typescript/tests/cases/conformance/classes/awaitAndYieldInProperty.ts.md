__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 20
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 31
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 32,
                    "end": 38
                  }
                ],
                "start": 31,
                "end": 39
              },
              "start": 24,
              "end": 39
            },
            "start": 22,
            "end": 39
          },
          "start": 21,
          "end": 39
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 54
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 73
                    },
                    "start": 66,
                    "end": 73
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 83,
                      "end": 84
                    },
                    "start": 77,
                    "end": 84
                  },
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 65,
                  "end": 85
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 109
                    },
                    "start": 102,
                    "end": 109
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 120
                    },
                    "start": 113,
                    "end": 120
                  },
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 94,
                  "end": 121
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 138,
                      "end": 139
                    },
                    "start": 132,
                    "end": 139
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 149,
                      "end": 150
                    },
                    "start": 143,
                    "end": 150
                  },
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 131,
                  "end": 151
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 174,
                      "end": 175
                    },
                    "start": 168,
                    "end": 175
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 185,
                      "end": 186
                    },
                    "start": 179,
                    "end": 186
                  },
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 160,
                  "end": 187
                }
              ],
              "start": 55,
              "end": 193
            },
            "abstract": false,
            "declare": false,
            "start": 47,
            "end": 193
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 230
                      },
                      "start": 223,
                      "end": 230
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 241
                      },
                      "start": 234,
                      "end": 241
                    },
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 222,
                    "end": 242
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 266
                      },
                      "start": 259,
                      "end": 266
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 276,
                        "end": 277
                      },
                      "start": 270,
                      "end": 277
                    },
                    "computed": true,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 251,
                    "end": 278
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 295,
                        "end": 296
                      },
                      "start": 289,
                      "end": 296
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 306,
                        "end": 307
                      },
                      "start": 300,
                      "end": 307
                    },
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 288,
                    "end": 308
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 331,
                        "end": 332
                      },
                      "start": 325,
                      "end": 332
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 342,
                        "end": 343
                      },
                      "start": 336,
                      "end": 343
                    },
                    "computed": true,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 317,
                    "end": 344
                  }
                ],
                "start": 212,
                "end": 350
              },
              "abstract": false,
              "declare": false,
              "start": 206,
              "end": 350
            },
            "start": 199,
            "end": 350
          }
        ],
        "start": 41,
        "end": 352
      },
      "expression": false,
      "start": 0,
      "end": 352
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 352
}
```
