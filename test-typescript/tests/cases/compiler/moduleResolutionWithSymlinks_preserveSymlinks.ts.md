__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 27,
        "raw": "\"real\"",
        "value": "real"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 13,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "real",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "real",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 36,
        "end": 58,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 44,
          "end": 58,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 46,
              "end": 56,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 42,
          "end": 43,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 25,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 25,
              "decorators": [],
              "name": "real",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17,
                "end": 25,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 19,
                  "end": 25
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 105,
  "end": 258,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 105,
      "end": 138,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 137,
        "raw": "\"linked\"",
        "value": "linked"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 114,
          "end": 121,
          "imported": {
            "type": "Identifier",
            "start": 114,
            "end": 115,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 119,
            "end": 121,
            "decorators": [],
            "name": "C1",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 139,
      "end": 173,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 163,
        "end": 172,
        "raw": "\"linked2\"",
        "value": "linked2"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 148,
          "end": 155,
          "imported": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "decorators": [],
            "name": "C2",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 183,
            "end": 191,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 187,
              "end": 189,
              "decorators": [],
              "name": "C1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 257,
      "expression": {
        "type": "AssignmentExpression",
        "start": 244,
        "end": 256,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 244,
          "end": 245,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 248,
          "end": 256,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 252,
            "end": 254,
            "decorators": [],
            "name": "C2",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
