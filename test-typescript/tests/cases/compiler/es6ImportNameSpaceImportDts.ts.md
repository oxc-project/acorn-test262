__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
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
    },
    {
      "type": "EmptyStatement",
      "start": 18,
      "end": 19
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
  "end": 149,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 28,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 28,
            "name": "nameSpaceBinding",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 44,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 86,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 53,
        "end": 86,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 57,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 61,
              "end": 85,
              "callee": {
                "type": "MemberExpression",
                "start": 65,
                "end": 83,
                "object": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 81,
                  "name": "nameSpaceBinding",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "name": "c",
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
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 133,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 94,
          "end": 116,
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 116,
            "name": "nameSpaceBinding2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 122,
        "end": 132,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
