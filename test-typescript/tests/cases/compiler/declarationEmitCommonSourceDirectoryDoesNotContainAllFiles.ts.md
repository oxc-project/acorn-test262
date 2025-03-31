__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 22,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "value": "./src/",
        "raw": "\"./src/\""
      },
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
  "end": 17,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 17,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 17,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
  "end": 71,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 21,
        "value": "b",
        "raw": "\"b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 24,
      "end": 71,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 39,
        "end": 71,
        "id": null,
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 51,
          "end": 71,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 54,
              "end": 69,
              "argument": {
                "type": "NewExpression",
                "start": 61,
                "end": 68,
                "callee": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "name": "B",
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
  "end": 22,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 22,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "value": "./src/",
        "raw": "\"./src/\""
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
