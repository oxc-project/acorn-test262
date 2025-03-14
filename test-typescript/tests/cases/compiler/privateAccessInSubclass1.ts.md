__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 36,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 30,
              "decorators": [],
              "name": "options",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 35,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 101,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 101,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 99,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 73,
              "decorators": [],
              "name": "myMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 99,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 99,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 82,
                    "end": 95,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 82,
                      "end": 94,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 82,
                        "end": 86
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 94,
                        "decorators": [],
                        "name": "options",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 56,
        "end": 60,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
