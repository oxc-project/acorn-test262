__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 44,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 44,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 42,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
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
              "start": 18,
              "end": 42,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 42,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 27,
                    "end": 39,
                    "argument": {
                      "type": "Literal",
                      "start": 34,
                      "end": 38,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
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
                "start": 20,
                "end": 23,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 22,
                  "end": 23,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
