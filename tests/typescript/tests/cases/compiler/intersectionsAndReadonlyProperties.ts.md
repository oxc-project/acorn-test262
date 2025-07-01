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
        "name": "Intersection1",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 47
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 64,
                    "end": 70
                  },
                  "start": 62,
                  "end": 70
                },
                "accessibility": null,
                "static": false,
                "start": 52,
                "end": 70
              }
            ],
            "start": 50,
            "end": 72
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  },
                  "start": 78,
                  "end": 86
                },
                "accessibility": null,
                "static": false,
                "start": 77,
                "end": 86
              }
            ],
            "start": 75,
            "end": 88
          }
        ],
        "start": 50,
        "end": 88
      },
      "declare": false,
      "start": 29,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intersection1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 119
                },
                "typeArguments": null,
                "start": 106,
                "end": 119
              },
              "start": 104,
              "end": 119
            },
            "start": 102,
            "end": 119
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 119
        }
      ],
      "declare": true,
      "start": 90,
      "end": 120
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
          },
          "optional": false,
          "computed": false,
          "start": 122,
          "end": 126
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 129,
          "end": 130
        },
        "start": 122,
        "end": 130
      },
      "directive": null,
      "start": 122,
      "end": 131
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Intersection2",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 172
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 182
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 186,
                    "end": 192
                  },
                  "start": 184,
                  "end": 192
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 177,
                "end": 192
              }
            ],
            "start": 175,
            "end": 194
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 204
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 208,
                        "end": 214
                      },
                      "start": 206,
                      "end": 214
                    },
                    "start": 205,
                    "end": 214
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 199,
                "end": 215
              }
            ],
            "start": 197,
            "end": 217
          }
        ],
        "start": 175,
        "end": 217
      },
      "declare": false,
      "start": 154,
      "end": 218
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intersection2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 248
                },
                "typeArguments": null,
                "start": 235,
                "end": 248
              },
              "start": 233,
              "end": 248
            },
            "start": 231,
            "end": 248
          },
          "init": null,
          "definite": false,
          "start": 231,
          "end": 248
        }
      ],
      "declare": true,
      "start": 219,
      "end": 249
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null,
            "start": 251,
            "end": 253
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 255
          },
          "optional": false,
          "computed": false,
          "start": 251,
          "end": 255
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 258,
          "end": 259
        },
        "start": 251,
        "end": 259
      },
      "directive": null,
      "start": 251,
      "end": 260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntersectionAllReadonly",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 360
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 375
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 377,
                    "end": 383
                  },
                  "start": 375,
                  "end": 383
                },
                "accessibility": null,
                "static": false,
                "start": 365,
                "end": 383
              }
            ],
            "start": 363,
            "end": 385
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 395
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 399,
                    "end": 405
                  },
                  "start": 397,
                  "end": 405
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 390,
                "end": 405
              }
            ],
            "start": 388,
            "end": 407
          }
        ],
        "start": 363,
        "end": 407
      },
      "declare": false,
      "start": 332,
      "end": 408
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ia",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IntersectionAllReadonly",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 448
                },
                "typeArguments": null,
                "start": 425,
                "end": 448
              },
              "start": 423,
              "end": 448
            },
            "start": 421,
            "end": 448
          },
          "init": null,
          "definite": false,
          "start": 421,
          "end": 448
        }
      ],
      "declare": true,
      "start": 409,
      "end": 449
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ia",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 453
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 455
          },
          "optional": false,
          "computed": false,
          "start": 451,
          "end": 455
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 458,
          "end": 459
        },
        "start": 451,
        "end": 459
      },
      "directive": null,
      "start": 451,
      "end": 460
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 469
}
```
