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
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "abstract": false,
        "declare": false
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
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
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
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "argument": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
              "decorators": [],
              "name": "__importDefault",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 60,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 57,
                    "end": 60
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 67,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 63,
                "end": 67
              }
            },
            "body": null,
            "expression": false
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
