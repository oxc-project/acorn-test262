__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 24,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "name": "intermediate",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 30,
        "end": 46,
        "value": "./intermediate",
        "raw": "'./intermediate'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 78,
            "name": "ghost",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 78,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 60,
                  "end": 78,
                  "left": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 72,
                    "name": "intermediate",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 78,
                    "name": "Ghost",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 81,
            "end": 105,
            "callee": {
              "type": "MemberExpression",
              "start": 85,
              "end": 103,
              "object": {
                "type": "Identifier",
                "start": 85,
                "end": 97,
                "name": "intermediate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 103,
                "name": "Ghost",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
  "end": 29,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 28,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "value": "./ghost",
        "raw": "'./ghost'"
      },
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
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 21,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "name": "Ghost",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 21,
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
