__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 7,
                "end": 11
              },
              "start": 5,
              "end": 11
            },
            "start": 4,
            "end": 11
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 17,
          "end": 18
        },
        "start": 13,
        "end": 18
      },
      "directive": null,
      "start": 13,
      "end": 19
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 21
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 24,
          "end": 26
        },
        "start": 20,
        "end": 26
      },
      "directive": null,
      "start": 20,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 29
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 32,
          "end": 36
        },
        "start": 28,
        "end": 36
      },
      "directive": null,
      "start": 28,
      "end": 37
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 45
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "initializer": null,
            "computed": false,
            "start": 48,
            "end": 49
          }
        ],
        "start": 46,
        "end": 51
      },
      "const": false,
      "declare": false,
      "start": 39,
      "end": 51
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 57
        },
        "start": 52,
        "end": 57
      },
      "directive": null,
      "start": 52,
      "end": 58
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 60
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 63,
          "end": 66
        },
        "start": 59,
        "end": 66
      },
      "directive": null,
      "start": 59,
      "end": 67
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 76
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              },
              "start": 82,
              "end": 90
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 79,
            "end": 90
          }
        ],
        "start": 77,
        "end": 92
      },
      "abstract": false,
      "declare": false,
      "start": 69,
      "end": 92
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "typeArguments": null,
                "start": 100,
                "end": 101
              },
              "start": 98,
              "end": 101
            },
            "start": 97,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 97,
          "end": 101
        }
      ],
      "declare": false,
      "start": 93,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 108
        },
        "start": 103,
        "end": 108
      },
      "directive": null,
      "start": 103,
      "end": 109
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 122
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 125,
            "end": 136
          }
        ],
        "start": 123,
        "end": 138
      },
      "declare": false,
      "start": 111,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 147
                },
                "typeArguments": null,
                "start": 146,
                "end": 147
              },
              "start": 144,
              "end": 147
            },
            "start": 143,
            "end": 147
          },
          "init": null,
          "definite": false,
          "start": 143,
          "end": 147
        }
      ],
      "declare": false,
      "start": 139,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 150
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 154
        },
        "start": 149,
        "end": 154
      },
      "directive": null,
      "start": 149,
      "end": 155
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 158
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 164
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 167,
                  "end": 169
                },
                "expression": false,
                "start": 164,
                "end": 169
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 163,
              "end": 169
            }
          ],
          "start": 161,
          "end": 171
        },
        "start": 157,
        "end": 171
      },
      "directive": null,
      "start": 157,
      "end": 171
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 184
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 202,
                    "end": 203
                  },
                  "definite": false,
                  "start": 198,
                  "end": 203
                }
              ],
              "declare": false,
              "start": 194,
              "end": 204
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 187,
            "end": 204
          }
        ],
        "start": 185,
        "end": 206
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 173,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 208
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 212
        },
        "start": 207,
        "end": 212
      },
      "directive": null,
      "start": 207,
      "end": 213
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 225
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 227
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 226,
            "end": 227
          }
        ],
        "start": 225,
        "end": 228
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              },
              "typeArguments": null,
              "start": 232,
              "end": 233
            },
            "start": 230,
            "end": 233
          },
          "start": 229,
          "end": 233
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 242
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 246
              },
              "start": 241,
              "end": 246
            },
            "directive": null,
            "start": 241,
            "end": 247
          }
        ],
        "start": 235,
        "end": 249
      },
      "expression": false,
      "start": 215,
      "end": 249
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 251
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 255
        },
        "start": 250,
        "end": 255
      },
      "directive": null,
      "start": 250,
      "end": 256
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 256
}
```
