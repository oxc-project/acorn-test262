__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file1",
        "raw": "'file1'",
        "start": 20,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 28
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "importKind": "value",
          "start": 37,
          "end": 38
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 46
          },
          "importKind": "value",
          "start": 40,
          "end": 46
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file2",
        "raw": "'file2'",
        "start": 53,
        "end": 60
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 29,
      "end": 61
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 69,
            "end": 70
          },
          "start": 69,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file3",
        "raw": "'file3'",
        "start": 76,
        "end": 83
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 62,
      "end": 83
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "file4",
        "raw": "'file4'",
        "start": 91,
        "end": 98
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 84,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 107
          },
          "start": 106,
          "end": 107
        },
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 117
          },
          "start": 109,
          "end": 117
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file5",
        "raw": "'file5'",
        "start": 123,
        "end": 130
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 131
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns3",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 142
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "file6",
          "raw": "'file6'",
          "start": 153,
          "end": 160
        },
        "start": 145,
        "end": 161
      },
      "importKind": "value",
      "start": 132,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 166
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 168
          },
          "optional": false,
          "computed": false,
          "start": 164,
          "end": 168
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 164,
        "end": 170
      },
      "directive": null,
      "start": 164,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 173
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 172,
        "end": 175
      },
      "directive": null,
      "start": 172,
      "end": 176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 178
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 177,
        "end": 180
      },
      "directive": null,
      "start": 177,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 183
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 182,
        "end": 185
      },
      "directive": null,
      "start": 182,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 188
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 187,
        "end": 190
      },
      "directive": null,
      "start": 187,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 195
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "optional": false,
          "computed": false,
          "start": 192,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 192,
        "end": 199
      },
      "directive": null,
      "start": 192,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns3",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 204
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 206
          },
          "optional": false,
          "computed": false,
          "start": 201,
          "end": 206
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 201,
        "end": 208
      },
      "directive": null,
      "start": 201,
      "end": 209
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "file7",
        "raw": "'file7'",
        "start": 225,
        "end": 232
      },
      "attributes": [],
      "exportKind": "value",
      "start": 211,
      "end": 233
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 240
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 240
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 243
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 246,
            "end": 250
          },
          "definite": false,
          "start": 242,
          "end": 250
        }
      ],
      "declare": false,
      "start": 235,
      "end": 251
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 261
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 261
          },
          "exportKind": "value",
          "start": 260,
          "end": 261
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 252,
      "end": 263
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
            "start": 272,
            "end": 273
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 278
          },
          "exportKind": "value",
          "start": 272,
          "end": 278
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 264,
      "end": 280
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 280
}
```
