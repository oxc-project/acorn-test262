__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "abc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 78,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 28,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 37,
              "name": "XYZ",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 38,
              "end": 76,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 48,
                  "end": 70,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 67,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 67,
                    "end": 70,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "MemberExpression",
        "start": 96,
        "end": 103,
        "object": {
          "type": "Identifier",
          "start": 96,
          "end": 99,
          "name": "abc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 100,
          "end": 103,
          "name": "XYZ",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 107,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
