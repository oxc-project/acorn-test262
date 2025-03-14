__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 24,
        "raw": "\"module\"",
        "value": "module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 50,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 50,
        "raw": "\"module\"",
        "value": "module"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 33,
          "end": 35,
          "imported": {
            "type": "Identifier",
            "start": 33,
            "end": 35,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 35,
            "decorators": [],
            "name": "c2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 51,
      "end": 79,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 79,
        "raw": "\"module\"",
        "value": "module"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 58,
          "end": 65,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 65,
            "decorators": [],
            "name": "ns",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 81,
      "end": 105,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 102,
        "end": 105,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 97,
        "end": 101,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 97,
          "end": 99,
          "decorators": [],
          "name": "c2",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 100,
          "end": 101,
          "decorators": [],
          "name": "C",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 115,
            "end": 122,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 132,
            "end": 140,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 132,
              "end": 134,
              "decorators": [],
              "name": "ns",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 135,
              "end": 140,
              "decorators": [],
              "name": "value",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 143,
      "end": 169,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 160,
        "end": 168,
        "raw": "\"module\"",
        "value": "module"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 151,
          "end": 153,
          "exported": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 151,
            "end": 153,
            "decorators": [],
            "name": "c1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 170,
      "end": 187,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 177,
        "end": 187,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 181,
            "end": 186,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
