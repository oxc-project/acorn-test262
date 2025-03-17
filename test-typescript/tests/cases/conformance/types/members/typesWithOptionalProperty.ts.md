__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 53,
  "end": 358,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 124,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 124,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 94,
                "end": 100
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 106,
            "end": 122,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 115,
                "end": 121
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 192,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 133,
                "end": 192,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 139,
                    "end": 151,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 142,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 142,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 144,
                        "end": 150
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 156,
                    "end": 169,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 159,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 160,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 162,
                        "end": 168
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 174,
                    "end": 190,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 177,
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 183,
                        "end": 189
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 195,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 203,
            "end": 214,
            "properties": [
              {
                "type": "Property",
                "start": 205,
                "end": 212,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 208,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 210,
                  "end": 212,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 224,
            "end": 243,
            "properties": [
              {
                "type": "Property",
                "start": 226,
                "end": 233,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 229,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 231,
                  "end": 233,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 235,
                "end": 241,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 238,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 241,
                  "raw": "3",
                  "value": 3
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 287,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 253,
            "end": 287,
            "properties": [
              {
                "type": "Property",
                "start": 255,
                "end": 262,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 258,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 260,
                  "end": 262,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 264,
                "end": 270,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 267,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 269,
                  "end": 270,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "Property",
                "start": 272,
                "end": 285,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 275,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 277,
                  "end": 285,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 283,
                    "end": 285,
                    "raw": "''",
                    "value": ""
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 298,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 298,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 301,
      "end": 307,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 301,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 301,
          "end": 302,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 305,
          "end": 306,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 314,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 308,
        "end": 313,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 308,
          "end": 309,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 321,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 315,
        "end": 320,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 315,
          "end": 316,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 319,
          "end": 320,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 329,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 323,
        "end": 328,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 327,
          "end": 328,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 336,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 335,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 330,
          "end": 331,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 334,
          "end": 335,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 343,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 337,
        "end": 342,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 337,
          "end": 338,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 341,
          "end": 342,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 345,
      "end": 351,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 345,
        "end": 350,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 345,
          "end": 346,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 349,
          "end": 350,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 352,
      "end": 358,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 352,
        "end": 357,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 352,
          "end": 353,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 356,
          "end": 357,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
