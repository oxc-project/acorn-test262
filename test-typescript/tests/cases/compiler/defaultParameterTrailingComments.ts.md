__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 136,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 81,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 79,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 79,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 26,
                  "end": 55,
                  "left": {
                    "type": "Identifier",
                    "start": 26,
                    "end": 47,
                    "name": "defaultParam",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 40,
                        "end": 47
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 50,
                    "end": 55,
                    "value": false,
                    "raw": "false"
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 79,
                "body": []
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 96,
          "end": 113,
          "left": {
            "type": "Identifier",
            "start": 96,
            "end": 108,
            "name": "defaultParam",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 111,
            "end": 113,
            "value": 10,
            "raw": "10"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 134,
        "end": 136,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
