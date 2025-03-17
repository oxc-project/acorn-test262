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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 51,
        "body": [
          {
            "type": "TSAbstractAccessorProperty",
            "start": 24,
            "end": 49,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "computed": false,
            "static": false,
            "decorators": [],
            "definite": false,
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
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 53,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 61,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 70,
        "end": 72,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 96,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 79,
            "end": 94,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 98,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 106,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 115,
        "end": 117,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 118,
        "end": 147,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 145,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 129,
              "end": 145,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
