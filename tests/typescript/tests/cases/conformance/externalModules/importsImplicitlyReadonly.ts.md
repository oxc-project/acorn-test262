__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 23
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 26,
            "end": 27
          },
          "definite": false,
          "start": 22,
          "end": 27
        }
      ],
      "declare": false,
      "start": 18,
      "end": 28
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "exportKind": "value",
          "start": 38,
          "end": 39
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 29,
      "end": 42
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "importKind": "value",
          "start": 12,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 21,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 42
          },
          "start": 35,
          "end": 42
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 48,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 28,
      "end": 54
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 64
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./a",
          "raw": "\"./a\"",
          "start": 75,
          "end": 80
        },
        "start": 67,
        "end": 81
      },
      "importKind": "value",
      "start": 55,
      "end": 82
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 91
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 96
          },
          "definite": false,
          "start": 89,
          "end": 96
        }
      ],
      "declare": false,
      "start": 83,
      "end": 97
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
          "start": 99,
          "end": 100
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 103,
          "end": 104
        },
        "start": 99,
        "end": 104
      },
      "directive": null,
      "start": 99,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 120
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 123,
          "end": 124
        },
        "start": 119,
        "end": 124
      },
      "directive": null,
      "start": 119,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 141
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "optional": false,
          "computed": false,
          "start": 139,
          "end": 143
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 146,
          "end": 147
        },
        "start": 139,
        "end": 147
      },
      "directive": null,
      "start": 139,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 161
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "optional": false,
          "computed": false,
          "start": 159,
          "end": 163
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 166,
          "end": 167
        },
        "start": 159,
        "end": 167
      },
      "directive": null,
      "start": 159,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 181
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 179,
          "end": 183
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 186,
          "end": 187
        },
        "start": 179,
        "end": 187
      },
      "directive": null,
      "start": 179,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 191
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 193
          },
          "optional": false,
          "computed": false,
          "start": 189,
          "end": 193
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 196,
          "end": 197
        },
        "start": 189,
        "end": 197
      },
      "directive": null,
      "start": 189,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 201
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 199,
          "end": 203
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 206,
          "end": 207
        },
        "start": 199,
        "end": 207
      },
      "directive": null,
      "start": 199,
      "end": 208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 211
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 213
          },
          "optional": false,
          "computed": false,
          "start": 209,
          "end": 213
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 216,
          "end": 217
        },
        "start": 209,
        "end": 217
      },
      "directive": null,
      "start": 209,
      "end": 218
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 218
}
```
