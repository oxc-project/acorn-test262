__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 255,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 91,
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
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 40,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 40,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 40,
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
            "start": 45,
            "end": 54,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 54,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 54,
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
            "start": 59,
            "end": 68,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 68,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 68,
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
            "start": 73,
            "end": 89,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "name": "boo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 89,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 89,
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
      "type": "TSModuleDeclaration",
      "start": 93,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 102,
        "end": 142,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 108,
            "end": 125,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 115,
              "end": 125,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 119,
                  "end": 124,
                  "id": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 123,
                    "end": 124,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 130,
            "end": 140,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 134,
                "end": 139,
                "id": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 138,
                  "end": 139,
                  "value": 2,
                  "raw": "2"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 143,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 151,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 152,
        "end": 219,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 158,
            "end": 183,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 165,
              "end": 183,
              "id": {
                "type": "Identifier",
                "start": 174,
                "end": 177,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 183,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 188,
            "end": 217,
            "id": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 203,
              "end": 217,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 205,
                  "end": 215,
                  "argument": {
                    "type": "Literal",
                    "start": 212,
                    "end": 214,
                    "value": "",
                    "raw": "''"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 226,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 229,
            "end": 239,
            "callee": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 235,
                "end": 238,
                "object": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 255,
      "expression": {
        "type": "AssignmentExpression",
        "start": 241,
        "end": 254,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 241,
          "end": 246,
          "object": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 243,
            "end": 246,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 249,
          "end": 254,
          "object": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 251,
            "end": 254,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
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
