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
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 47,
        "decorators": [],
        "name": "Intersection1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 70,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 64,
                    "end": 70
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 120,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 119,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 119,
                  "decorators": [],
                  "name": "Intersection1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 131,
      "expression": {
        "type": "AssignmentExpression",
        "start": 122,
        "end": 130,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 122,
          "end": 126,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 124,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 126,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 129,
          "end": 130,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 154,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 172,
        "decorators": [],
        "name": "Intersection2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "key": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
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
                "accessibility": null,
                "readonly": false,
                "static": false
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
                "key": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
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
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 249,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 248,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 248,
                  "decorators": [],
                  "name": "Intersection2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 260,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 259,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 251,
          "end": 255,
          "object": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 254,
            "end": 255,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 258,
          "end": 259,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 332,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 360,
        "decorators": [],
        "name": "IntersectionAllReadonly",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 375,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 375,
                  "end": 383,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 377,
                    "end": 383
                  }
                },
                "accessibility": null,
                "static": false
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
                "key": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
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
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 409,
      "end": 449,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 448,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 448,
                  "decorators": [],
                  "name": "IntersectionAllReadonly",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 451,
      "end": 460,
      "expression": {
        "type": "AssignmentExpression",
        "start": 451,
        "end": 459,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 451,
          "end": 455,
          "object": {
            "type": "Identifier",
            "start": 451,
            "end": 453,
            "decorators": [],
            "name": "ia",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 454,
            "end": 455,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 458,
          "end": 459,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
