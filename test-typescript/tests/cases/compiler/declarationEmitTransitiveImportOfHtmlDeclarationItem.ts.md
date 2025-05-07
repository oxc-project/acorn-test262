__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 53,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 53,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 53,
          "body": []
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 50,
          "decorators": [],
          "name": "CustomHtmlRepresentationThing",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 136,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 59,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 46,
        "end": 58,
        "raw": "\"./foo.html\"",
        "value": "./foo.html",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 38,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 38,
            "decorators": [],
            "name": "CustomHtmlRepresentationThing",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 38,
            "decorators": [],
            "name": "CustomHtmlRepresentationThing",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 135,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 68,
        "end": 135,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 84,
          "end": 135,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 90,
              "end": 133,
              "argument": {
                "type": "NewExpression",
                "start": 97,
                "end": 132,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 130,
                  "decorators": [],
                  "name": "CustomHtmlRepresentationThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 77,
          "end": 81,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
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
  "end": 61,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 35,
        "raw": "\"./reexporter\"",
        "value": "./reexporter",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 61,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 61,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 60,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 54,
              "end": 60,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 54,
                "end": 58,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
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
