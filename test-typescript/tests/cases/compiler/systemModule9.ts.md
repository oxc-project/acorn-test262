__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 280,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 27,
        "value": "file1",
        "raw": "'file1'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 29,
      "end": 61,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 37,
          "end": 38,
          "imported": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 46,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 60,
        "value": "file2",
        "raw": "'file2'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 62,
      "end": 83,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 69,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 83,
        "value": "file3",
        "raw": "'file3'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 84,
      "end": 98,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 91,
        "end": 98,
        "value": "file4",
        "raw": "'file4'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 131,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 106,
          "end": 107,
          "local": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportNamespaceSpecifier",
          "start": 109,
          "end": 117,
          "local": {
            "type": "Identifier",
            "start": 114,
            "end": 117,
            "name": "ns2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 123,
        "end": 130,
        "value": "file5",
        "raw": "'file5'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 132,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 142,
        "name": "ns3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 145,
        "end": 161,
        "expression": {
          "type": "Literal",
          "start": 153,
          "end": 160,
          "value": "file6",
          "raw": "'file6'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 171,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 170,
        "callee": {
          "type": "MemberExpression",
          "start": 164,
          "end": 168,
          "object": {
            "type": "Identifier",
            "start": 164,
            "end": 166,
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "f",
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
      "start": 172,
      "end": 176,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 175,
        "callee": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
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
      "start": 177,
      "end": 181,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 180,
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 178,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
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
      "start": 182,
      "end": 186,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 185,
        "callee": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
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
      "start": 187,
      "end": 191,
      "expression": {
        "type": "CallExpression",
        "start": 187,
        "end": 190,
        "callee": {
          "type": "Identifier",
          "start": 187,
          "end": 188,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
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
      "start": 192,
      "end": 200,
      "expression": {
        "type": "CallExpression",
        "start": 192,
        "end": 199,
        "callee": {
          "type": "MemberExpression",
          "start": 192,
          "end": 197,
          "object": {
            "type": "Identifier",
            "start": 192,
            "end": 195,
            "name": "ns2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "name": "f",
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
      "start": 201,
      "end": 209,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 208,
        "callee": {
          "type": "MemberExpression",
          "start": 201,
          "end": 206,
          "object": {
            "type": "Identifier",
            "start": 201,
            "end": 204,
            "name": "ns3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "name": "f",
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
      "type": "ExportAllDeclaration",
      "start": 211,
      "end": 233,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 225,
        "end": 232,
        "value": "file7",
        "raw": "'file7'"
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 250,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 246,
            "end": 250,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 252,
      "end": 263,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 260,
          "end": 261,
          "local": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 264,
      "end": 280,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 272,
          "end": 278,
          "local": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
