__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 51,
        "body": [
          {
            "type": "TSAbstractAccessorProperty",
            "start": 24,
            "end": 49,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 48,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 45,
                "end": 48
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
        "start": 15,
        "end": 17,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 96,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 96,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 79,
            "end": 94,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 61,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 70,
        "end": 72,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 98,
      "end": 147,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 118,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 145,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 145,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 145,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 134,
                    "end": 143,
                    "argument": {
                      "type": "Literal",
                      "start": 141,
                      "end": 142,
                      "raw": "1",
                      "value": 1
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
        "start": 104,
        "end": 106,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 115,
        "end": 117,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
