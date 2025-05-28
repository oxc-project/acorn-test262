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
            "decorators": [],
            "name": "intermediate",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 105,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 78,
            "decorators": [],
            "name": "ghost",
            "optional": false,
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
                    "decorators": [],
                    "name": "intermediate",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 73,
                    "end": 78,
                    "decorators": [],
                    "name": "Ghost",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
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
                "decorators": [],
                "name": "intermediate",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 103,
                "decorators": [],
                "name": "Ghost",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "Ghost",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 21,
          "body": []
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
