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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 53,
          "body": []
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
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
            "decorators": [],
            "name": "CustomHtmlRepresentationThing",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 38,
            "decorators": [],
            "name": "CustomHtmlRepresentationThing",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
                  "decorators": [],
                  "name": "CustomHtmlRepresentationThing",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            }
          ]
        },
        "expression": false
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
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 60,
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
              "callee": {
                "type": "Identifier",
                "start": 54,
                "end": 58,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
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
