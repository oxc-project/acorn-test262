__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "abc",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "XYZ",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 37
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 67
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 67,
                    "end": 70
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 48,
                  "end": 70
                }
              ],
              "start": 38,
              "end": 76
            },
            "abstract": false,
            "declare": false,
            "start": 28,
            "end": 76
          }
        ],
        "start": 22,
        "end": 78
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "abc",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 99
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "XYZ",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 103
        },
        "optional": false,
        "computed": false,
        "start": 96,
        "end": 103
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 104,
        "end": 107
      },
      "abstract": false,
      "declare": false,
      "start": 80,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
