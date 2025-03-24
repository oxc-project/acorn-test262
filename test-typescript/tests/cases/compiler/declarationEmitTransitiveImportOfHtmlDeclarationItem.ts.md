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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 53,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 50,
          "name": "CustomHtmlRepresentationThing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 53,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 38,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 38,
            "name": "CustomHtmlRepresentationThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 38,
            "name": "CustomHtmlRepresentationThing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 46,
        "end": 58,
        "value": "./foo.html",
        "raw": "\"./foo.html\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 135,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 68,
        "end": 135,
        "id": {
          "type": "Identifier",
          "start": 77,
          "end": 81,
          "name": "func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
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
                "callee": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 130,
                  "name": "CustomHtmlRepresentationThing",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 35,
        "value": "./reexporter",
        "raw": "\"./reexporter\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 61,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 61,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 54,
              "end": 60,
              "callee": {
                "type": "Identifier",
                "start": 54,
                "end": 58,
                "name": "func",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
