__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 204,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 204,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 204,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 143,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 102,
              "decorators": [],
              "name": "Count",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 143,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 143,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 127,
                    "end": 137,
                    "argument": {
                      "type": "Literal",
                      "start": 134,
                      "end": 136,
                      "raw": "42",
                      "value": 42
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 106,
                  "end": 112
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 149,
            "end": 202,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 164,
              "decorators": [],
              "name": "SetCount",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 202,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 184,
                "end": 202,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 178,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 170,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 172,
                      "end": 178
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
        "start": 48,
        "end": 55,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
