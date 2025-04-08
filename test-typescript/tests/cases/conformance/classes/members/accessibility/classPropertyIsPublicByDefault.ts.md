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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 190,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 53,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 53,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 70,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 70,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 70,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 84,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 84,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 84,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 90,
            "end": 107,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 112,
            "end": 143,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 124,
              "end": 143,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 167,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 160,
              "end": 167,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 164,
                "end": 167,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 172,
            "end": 188,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 182,
              "end": 188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 185,
                "end": 188,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 200,
            "name": "c",
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
                  "name": "C",
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
      "start": 202,
      "end": 206,
      "expression": {
        "type": "MemberExpression",
        "start": 202,
        "end": 205,
        "object": {
          "type": "Identifier",
          "start": 202,
          "end": 203,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 204,
          "end": 205,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 211,
      "expression": {
        "type": "MemberExpression",
        "start": 207,
        "end": 210,
        "object": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 209,
          "end": 210,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 212,
            "end": 213,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 218,
          "end": 219,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 229,
      "expression": {
        "type": "CallExpression",
        "start": 221,
        "end": 228,
        "callee": {
          "type": "MemberExpression",
          "start": 221,
          "end": 226,
          "object": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 223,
            "end": 226,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 235,
      "expression": {
        "type": "MemberExpression",
        "start": 231,
        "end": 234,
        "object": {
          "type": "Identifier",
          "start": 231,
          "end": 232,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 233,
          "end": 234,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 236,
      "end": 242,
      "expression": {
        "type": "CallExpression",
        "start": 236,
        "end": 241,
        "callee": {
          "type": "MemberExpression",
          "start": 236,
          "end": 239,
          "object": {
            "type": "Identifier",
            "start": 236,
            "end": 237,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 249,
          "end": 250,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 260,
      "expression": {
        "type": "CallExpression",
        "start": 252,
        "end": 259,
        "callee": {
          "type": "MemberExpression",
          "start": 252,
          "end": 257,
          "object": {
            "type": "Identifier",
            "start": 252,
            "end": 253,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 254,
            "end": 257,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
