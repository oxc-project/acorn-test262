__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Named",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 17
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 20,
            "end": 21
          },
          "start": 20,
          "end": 21
        },
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 22
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
            "name": "Named",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 44,
                  "end": 45
                },
                "start": 44,
                "end": 45
              },
              "start": 42,
              "end": 45
            },
            "start": 37,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 45
        }
      ],
      "declare": true,
      "start": 23,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportAllDeclaration",
      "exported": {
        "type": "Identifier",
        "decorators": [],
        "name": "default",
        "optional": false,
        "typeAnnotation": null,
        "start": 12,
        "end": 19
      },
      "source": {
        "type": "Literal",
        "value": "./three",
        "raw": "\"./three\"",
        "start": 25,
        "end": 34
      },
      "attributes": [],
      "exportKind": "value",
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 9
          },
          "start": 7,
          "end": 9
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./two",
        "raw": "\"./two\"",
        "start": 15,
        "end": 22
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Alias",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 34
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 39
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Named",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 45
          },
          "start": 37,
          "end": 45
        },
        "typeArguments": null,
        "start": 37,
        "end": 45
      },
      "declare": false,
      "start": 24,
      "end": 46
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 49
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Named",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 55
        },
        "optional": false,
        "computed": false,
        "start": 47,
        "end": 55
      },
      "directive": null,
      "start": 47,
      "end": 56
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
