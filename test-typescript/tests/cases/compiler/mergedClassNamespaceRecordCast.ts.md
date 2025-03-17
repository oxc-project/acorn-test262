__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 279,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 21,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 19,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 14,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 14,
              "end": 19,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 17,
                "end": 19,
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
      "type": "ExpressionStatement",
      "start": 23,
      "end": 59,
      "expression": {
        "type": "TSAsExpression",
        "start": 23,
        "end": 58,
        "expression": {
          "type": "NewExpression",
          "start": 23,
          "end": 31,
          "callee": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "name": "C1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 58,
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 41,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 41,
            "end": 58,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              },
              {
                "type": "TSUnknownKeyword",
                "start": 50,
                "end": 57
              }
            ]
          }
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 70,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 81,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 81,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 81,
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
      "start": 84,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 97,
        "end": 128,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 126,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 106,
              "end": 126,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 112,
                  "end": 125,
                  "id": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 121,
                    "name": "unrelated",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 124,
                    "end": 125,
                    "value": 3,
                    "raw": "3"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 166,
      "expression": {
        "type": "TSAsExpression",
        "start": 130,
        "end": 165,
        "expression": {
          "type": "NewExpression",
          "start": 130,
          "end": 138,
          "callee": {
            "type": "Identifier",
            "start": 134,
            "end": 136,
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 142,
          "end": 165,
          "typeName": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 148,
            "end": 165,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 149,
                "end": 155
              },
              {
                "type": "TSUnknownKeyword",
                "start": 157,
                "end": 164
              }
            ]
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 180,
      "expression": {
        "type": "MemberExpression",
        "start": 168,
        "end": 180,
        "object": {
          "type": "Identifier",
          "start": 168,
          "end": 170,
          "name": "C2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 171,
          "end": 180,
          "name": "unrelated",
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
      "start": 181,
      "end": 199,
      "expression": {
        "type": "MemberExpression",
        "start": 181,
        "end": 199,
        "object": {
          "type": "NewExpression",
          "start": 181,
          "end": 189,
          "callee": {
            "type": "Identifier",
            "start": 185,
            "end": 187,
            "name": "C2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 190,
          "end": 199,
          "name": "unrelated",
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
      "type": "TSModuleDeclaration",
      "start": 202,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 214,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 215,
        "end": 246,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 217,
            "end": 244,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 224,
              "end": 244,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 230,
                  "end": 243,
                  "id": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 239,
                    "name": "unrelated",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 242,
                    "end": 243,
                    "value": 3,
                    "raw": "3"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 278,
      "expression": {
        "type": "TSAsExpression",
        "start": 248,
        "end": 277,
        "expression": {
          "type": "Identifier",
          "start": 248,
          "end": 250,
          "name": "C3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 254,
          "end": 277,
          "typeName": {
            "type": "Identifier",
            "start": 254,
            "end": 260,
            "name": "Record",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 260,
            "end": 277,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 261,
                "end": 267
              },
              {
                "type": "TSUnknownKeyword",
                "start": 269,
                "end": 276
              }
            ]
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
