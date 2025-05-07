__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 469,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 29,
      "end": 89,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 47,
        "decorators": [],
        "name": "Intersection1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 50,
        "end": 88,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 50,
            "end": 72,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 52,
                "end": 70,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": true,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 70,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 64,
                    "end": 70
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 75,
            "end": 88,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 77,
                "end": 86,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 119,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 119,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 119,
                  "decorators": [],
                  "name": "Intersection1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 122,
        "end": 130,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 122,
          "end": 126,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 129,
          "end": 130,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 154,
      "end": 218,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 172,
        "decorators": [],
        "name": "Intersection2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 175,
        "end": 217,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 175,
            "end": 194,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 177,
                "end": 192,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "optional": false,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 184,
                  "end": 192,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 186,
                    "end": 192
                  }
                },
                "static": false,
                "typeParameters": null
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 197,
            "end": 217,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 199,
                "end": 215,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "set",
                "optional": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 205,
                    "end": 214,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 214,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 208,
                        "end": 214
                      }
                    }
                  }
                ],
                "readonly": false,
                "returnType": null,
                "static": false,
                "typeParameters": null
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 248,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 248,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 248,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 248,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 248,
                  "decorators": [],
                  "name": "Intersection2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 260,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 259,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 251,
          "end": 255,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 254,
            "end": 255,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 258,
          "end": 259,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 332,
      "end": 408,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 360,
        "decorators": [],
        "name": "IntersectionAllReadonly",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 363,
        "end": 407,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 363,
            "end": 385,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 365,
                "end": 383,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 375,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": true,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 375,
                  "end": 383,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 377,
                    "end": 383
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 388,
            "end": 407,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 390,
                "end": 405,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "optional": false,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 397,
                  "end": 405,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 399,
                    "end": 405
                  }
                },
                "static": false,
                "typeParameters": null
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 409,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 448,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 448,
            "decorators": [],
            "name": "ia",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 448,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 425,
                "end": 448,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 448,
                  "decorators": [],
                  "name": "IntersectionAllReadonly",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 451,
      "end": 460,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 451,
        "end": 459,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 451,
          "end": 455,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 451,
            "end": 453,
            "decorators": [],
            "name": "ia",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 454,
            "end": 455,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 458,
          "end": 459,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
