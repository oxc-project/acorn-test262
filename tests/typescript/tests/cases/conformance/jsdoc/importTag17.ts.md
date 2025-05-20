__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 37,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 37,
              "decorators": [],
              "name": "Import",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 29,
                  "end": 37,
                  "literal": {
                    "type": "Literal",
                    "start": 29,
                    "end": 37,
                    "raw": "\"module\"",
                    "value": "module"
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
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
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 38,
              "decorators": [],
              "name": "Require",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 28,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 30,
                  "end": 38,
                  "literal": {
                    "type": "Literal",
                    "start": 30,
                    "end": 38,
                    "raw": "\"script\"",
                    "value": "script"
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
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
  "start": 182,
  "end": 292,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 182,
      "end": 220,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 189,
        "end": 220,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 203,
          "end": 220,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 209,
              "end": 218,
              "argument": {
                "type": "Literal",
                "start": 216,
                "end": 217,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 198,
          "end": 200,
          "decorators": [],
          "name": "f1",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 254,
      "end": 292,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 261,
        "end": 292,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 275,
          "end": 292,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 281,
              "end": 290,
              "argument": {
                "type": "Literal",
                "start": 288,
                "end": 289,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 270,
          "end": 272,
          "decorators": [],
          "name": "f2",
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
