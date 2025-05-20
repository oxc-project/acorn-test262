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
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 44,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 28,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 28,
            "decorators": [],
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 86,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 53,
        "end": 86,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 57,
            "end": 85,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 61,
              "end": 85,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 65,
                "end": 83,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 81,
                  "decorators": [],
                  "name": "nameSpaceBinding",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 87,
      "end": 133,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 122,
        "end": 132,
        "raw": "\"./server\"",
        "value": "./server"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 94,
          "end": 116,
          "local": {
            "type": "Identifier",
            "start": 99,
            "end": 116,
            "decorators": [],
            "name": "nameSpaceBinding2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
