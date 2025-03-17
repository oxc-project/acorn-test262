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
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 124,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 101,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 94,
                "end": 100
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 106,
            "end": 122,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 192,
            "name": "a",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 142,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 142,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 144,
                        "end": 150
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 156,
                    "end": 169,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 159,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 160,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 162,
                        "end": 168
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 174,
                    "end": 190,
                    "key": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 177,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 208,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 210,
                  "end": 212,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 229,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 231,
                  "end": 233,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 235,
                "end": 241,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 238,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 241,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 258,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 260,
                  "end": 262,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 264,
                "end": 270,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 267,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 269,
                  "end": 270,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 272,
                "end": 285,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 275,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 277,
                  "end": 285,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Literal",
                    "start": 283,
                    "end": 285,
                    "value": "",
                    "raw": "''"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 298,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 295,
              "end": 298,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 297,
                "end": 298,
                "typeName": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 301,
      "end": 307,
      "expression": {
        "type": "AssignmentExpression",
        "start": 301,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 301,
          "end": 302,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 305,
          "end": 306,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 314,
      "expression": {
        "type": "AssignmentExpression",
        "start": 308,
        "end": 313,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 308,
          "end": 309,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 321,
      "expression": {
        "type": "AssignmentExpression",
        "start": 315,
        "end": 320,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 315,
          "end": 316,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 319,
          "end": 320,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 329,
      "expression": {
        "type": "AssignmentExpression",
        "start": 323,
        "end": 328,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 327,
          "end": 328,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 336,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 335,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 330,
          "end": 331,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 334,
          "end": 335,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 343,
      "expression": {
        "type": "AssignmentExpression",
        "start": 337,
        "end": 342,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 337,
          "end": 338,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 341,
          "end": 342,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 345,
      "end": 351,
      "expression": {
        "type": "AssignmentExpression",
        "start": 345,
        "end": 350,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 345,
          "end": 346,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 349,
          "end": 350,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 352,
      "end": 358,
      "expression": {
        "type": "AssignmentExpression",
        "start": 352,
        "end": 357,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 352,
          "end": 353,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 356,
          "end": 357,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
