__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 166,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
              "name": "blub",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 22,
              "end": 23,
              "value": 6,
              "raw": "6"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 166,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 64,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "name": "blub",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 61,
              "end": 63,
              "value": 12,
              "raw": "12"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 81,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 164,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 164,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 94,
                    "end": 107,
                    "expression": {
                      "type": "Literal",
                      "start": 94,
                      "end": 106,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    },
                    "directive": "use strict"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 116,
                    "end": 142,
                    "expression": {
                      "type": "Literal",
                      "start": 116,
                      "end": 141,
                      "value": "someStringForEgngInject",
                      "raw": "'someStringForEgngInject'"
                    },
                    "directive": "someStringForEgngInject"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 151,
                    "end": 158,
                    "expression": {
                      "type": "CallExpression",
                      "start": 151,
                      "end": 158,
                      "callee": {
                        "type": "Super",
                        "start": 151,
                        "end": 156
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
