__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 28
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 41
            },
            "typeArguments": null,
            "start": 32,
            "end": 41
          },
          "start": 30,
          "end": 41
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 51,
                  "end": 55
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 59,
                  "end": 62
                },
                "start": 51,
                "end": 62
              },
              "start": 44,
              "end": 62
            }
          ],
          "start": 42,
          "end": 64
        },
        "expression": false,
        "start": 7,
        "end": 64
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 64
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Something",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 95
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 96,
          "end": 98
        },
        "abstract": false,
        "declare": false,
        "start": 80,
        "end": 98
      },
      "exportKind": "value",
      "start": 65,
      "end": 98
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 98
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 12
          },
          "start": 7,
          "end": 12
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "getSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "getSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 28
          },
          "importKind": "value",
          "start": 16,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./root",
        "raw": "\"./root\"",
        "start": 36,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 45
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "instance",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 67
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 82
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 70,
              "end": 84
            },
            "definite": false,
            "start": 59,
            "end": 84
          }
        ],
        "declare": false,
        "start": 53,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
