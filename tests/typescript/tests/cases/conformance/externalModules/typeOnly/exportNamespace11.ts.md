__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "intermediate",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 24
          },
          "start": 7,
          "end": 24
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./intermediate",
        "raw": "'./intermediate'",
        "start": 30,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ghost",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "intermediate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 72
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Ghost",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 78
                  },
                  "start": 60,
                  "end": 78
                },
                "typeArguments": null,
                "start": 60,
                "end": 78
              },
              "start": 58,
              "end": 78
            },
            "start": 53,
            "end": 78
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "intermediate",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 97
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ghost",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 103
              },
              "optional": false,
              "computed": false,
              "start": 85,
              "end": 103
            },
            "typeArguments": null,
            "arguments": [],
            "start": 81,
            "end": 105
          },
          "definite": false,
          "start": 53,
          "end": 105
        }
      ],
      "declare": false,
      "start": 47,
      "end": 105
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 106
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./ghost",
        "raw": "'./ghost'",
        "start": 19,
        "end": 28
      },
      "attributes": [],
      "exportKind": "type",
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Ghost",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 19,
          "end": 21
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
