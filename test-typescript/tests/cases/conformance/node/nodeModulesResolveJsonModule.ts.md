__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "name": "pkg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 32,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 40,
          "end": 52,
          "key": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 46,
            "end": 52,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 85,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 73,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 76,
              "end": 84,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "name": "pkg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 84,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
    },
    {
      "type": "ImportDeclaration",
      "start": 86,
      "end": 145,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 93,
          "end": 100,
          "local": {
            "type": "Identifier",
            "start": 98,
            "end": 100,
            "name": "ns",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 106,
        "end": 122,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 130,
          "end": 142,
          "key": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 136,
            "end": 142,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 170,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 170,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 169,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 164,
              "name": "thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 208,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 208,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 184,
            "end": 207,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 189,
              "name": "name2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 192,
              "end": 207,
              "object": {
                "type": "MemberExpression",
                "start": 192,
                "end": 202,
                "object": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "name": "ns",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 202,
                  "name": "default",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
