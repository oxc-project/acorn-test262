__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 39,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 39,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 37,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 37,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 27,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 29,
                  "end": 33
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 37,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 100,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 56,
        "end": 57,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 100,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 98,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 98,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 76,
                  "end": 87,
                  "decorators": [],
                  "name": "value",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 84,
                      "end": 87
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 88,
                "end": 94,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 90,
                  "end": 94
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 98,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
