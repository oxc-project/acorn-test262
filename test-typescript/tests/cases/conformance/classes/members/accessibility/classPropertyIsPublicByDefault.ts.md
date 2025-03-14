__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 260,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 190,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 190,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 53,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 53,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 39,
                    "end": 51,
                    "argument": {
                      "type": "Literal",
                      "start": 46,
                      "end": 50,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 70,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 70,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 84,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 84,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 90,
            "end": 107,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 106,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 100,
                "end": 106
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 112,
            "end": 143,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 143,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 127,
                "end": 143,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 129,
                    "end": 141,
                    "argument": {
                      "type": "Literal",
                      "start": 136,
                      "end": 140,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 167,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 167,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 164,
                "end": 167,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 188,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 182,
              "end": 188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 185,
                "end": 188,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 200,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 200,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 200,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "C",
                  "optional": false
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
      "start": 202,
      "end": 206,
      "expression": {
        "type": "MemberExpression",
        "start": 202,
        "end": 205,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 202,
          "end": 203,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 204,
          "end": 205,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 211,
      "expression": {
        "type": "MemberExpression",
        "start": 207,
        "end": 210,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 209,
          "end": 210,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 220,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 219,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 212,
          "end": 215,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 218,
          "end": 219,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 229,
      "expression": {
        "type": "CallExpression",
        "start": 221,
        "end": 228,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 221,
          "end": 226,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 223,
            "end": 226,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 235,
      "expression": {
        "type": "MemberExpression",
        "start": 231,
        "end": 234,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 233,
          "end": 234,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 242,
      "expression": {
        "type": "CallExpression",
        "start": 236,
        "end": 241,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 236,
          "end": 239,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 236,
            "end": 237,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 251,
      "expression": {
        "type": "AssignmentExpression",
        "start": 243,
        "end": 250,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 243,
          "end": 246,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 249,
          "end": 250,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 260,
      "expression": {
        "type": "CallExpression",
        "start": 252,
        "end": 259,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 252,
          "end": 257,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 254,
            "end": 257,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
