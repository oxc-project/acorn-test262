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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "real",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "real",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 27,
        "value": "real",
        "raw": "\"real\""
      },
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 58,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 36,
        "end": 58,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 42,
          "end": 43,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 44,
          "end": 58,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 46,
              "end": 56,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "private"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 25,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 257,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 105,
      "end": 138,
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 119,
            "end": 121,
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 137,
        "value": "linked",
        "raw": "\"linked\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 139,
      "end": 173,
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 163,
        "end": 172,
        "value": "linked2",
        "raw": "\"linked2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 192,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 183,
            "end": 191,
            "callee": {
              "type": "Identifier",
              "start": 187,
              "end": 189,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
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
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 248,
          "end": 256,
          "callee": {
            "type": "Identifier",
            "start": 252,
            "end": 254,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
