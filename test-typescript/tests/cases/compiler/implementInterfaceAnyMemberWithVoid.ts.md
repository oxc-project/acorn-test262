__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 39,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 39,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 35,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 35,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 29,
                    "end": 35
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 105,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 103,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 80,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 103,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 103,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 94,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 94,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 88,
                      "end": 94
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "decorators": [],
        "name": "Bug",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 62,
          "end": 63,
          "expression": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
