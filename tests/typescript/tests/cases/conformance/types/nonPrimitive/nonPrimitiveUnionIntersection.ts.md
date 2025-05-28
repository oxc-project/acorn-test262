__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 241,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 22,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 7,
                "end": 22,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 16,
                    "end": 22
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 25,
            "end": 27,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 66,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 60,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 60,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 45,
                "end": 60,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 45,
                    "end": 51
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 54,
                    "end": 60
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 63,
            "end": 65,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 98,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 91,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 91,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 80,
                "end": 91,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 80,
                    "end": 86
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 89,
                    "end": 91,
                    "members": []
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 94,
            "end": 97,
            "value": 123,
            "raw": "123"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 114,
      "expression": {
        "type": "AssignmentExpression",
        "start": 108,
        "end": 113,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 112,
          "end": 113,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 130,
      "expression": {
        "type": "AssignmentExpression",
        "start": 124,
        "end": 129,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 124,
          "end": 125,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 176,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 160,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 160,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 149,
                "end": 160,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 149,
                    "end": 155
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 158,
                    "end": 160,
                    "members": []
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 163,
            "end": 175,
            "properties": [
              {
                "type": "Property",
                "start": 164,
                "end": 174,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 167,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 169,
                  "end": 174,
                  "value": "bar",
                  "raw": "'bar'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 232,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 216,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 216,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 194,
                "end": 216,
                "types": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 194,
                    "end": 200
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 203,
                    "end": 216,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 204,
                        "end": 215,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 207,
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 207,
                          "end": 215,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 209,
                            "end": 215
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 219,
            "end": 231,
            "properties": [
              {
                "type": "Property",
                "start": 220,
                "end": 230,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 223,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 225,
                  "end": 230,
                  "value": "bar",
                  "raw": "'bar'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
