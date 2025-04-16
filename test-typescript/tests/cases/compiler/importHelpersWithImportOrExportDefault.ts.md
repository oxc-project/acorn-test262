__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 24,
        "id": null,
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
  "end": 111,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 30,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 29,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 66,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 40,
          "end": 52,
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 47,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 60,
        "end": 65,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 67,
      "end": 102,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 76,
          "end": 88,
          "imported": {
            "type": "Identifier",
            "start": 76,
            "end": 83,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 96,
        "end": 101,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 110,
      "expression": {
        "type": "UnaryExpression",
        "start": 103,
        "end": 109,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
  "end": 70,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 70,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "tslib",
        "raw": "\"tslib\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 70,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 29,
            "end": 68,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 53,
              "name": "__importDefault",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "name": "m",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 57,
                    "end": 60
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 67,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 63,
                "end": 67
              }
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
