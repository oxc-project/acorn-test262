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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 27,
        "raw": "'file1'",
        "value": "file1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 29,
      "end": 61,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 53,
        "end": 60,
        "raw": "'file2'",
        "value": "file2",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 37,
          "end": 38,
          "imported": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 40,
          "end": 46,
          "imported": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 62,
      "end": 83,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 83,
        "raw": "'file3'",
        "value": "file3",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 69,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 84,
      "end": 98,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 91,
        "end": 98,
        "raw": "'file4'",
        "value": "file4",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 131,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 123,
        "end": 130,
        "raw": "'file5'",
        "value": "file5",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 106,
          "end": 107,
          "local": {
            "type": "Identifier",
            "start": 106,
            "end": 107,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 132,
      "end": 162,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 142,
        "decorators": [],
        "name": "ns3",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 145,
        "end": 161,
        "expression": {
          "type": "Literal",
          "start": 153,
          "end": 160,
          "raw": "'file6'",
          "value": "file6",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 171,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 170,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 164,
          "end": 168,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 164,
            "end": 166,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 176,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 172,
        "end": 175,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 172,
          "end": 173,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 181,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 180,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 178,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 185,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 187,
        "end": 190,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 187,
          "end": 188,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 200,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 192,
        "end": 199,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 192,
          "end": 197,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 192,
            "end": 195,
            "decorators": [],
            "name": "ns2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 208,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 201,
          "end": 206,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 201,
            "end": 204,
            "decorators": [],
            "name": "ns3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 205,
            "end": 206,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 211,
      "end": 233,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 225,
        "end": 232,
        "raw": "'file7'",
        "value": "file7",
        "regex": null,
        "bigint": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 250,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 246,
            "end": 250,
            "raw": "true",
            "value": true,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 252,
      "end": 263,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 260,
          "end": 261,
          "exported": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 264,
      "end": 280,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 272,
          "end": 278,
          "exported": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 272,
            "end": 273,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
